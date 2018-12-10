function sumPrimes(num) {
  function isPrime(number){
      for (let i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
             return false;
          }
       }
      return true;
  return num;
  }

  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(!isPrime(num)){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if(isPrime(num)){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}


sumPrimes(10);
