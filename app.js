// console.log("Any string");

var pronouns = ['the', 'our', 'my', 'your', 'his', 'her', 'its', 'their', 'one', 'some'];
var adjs = ['beautiful', 'angry', 'great', 'fancy', 'silly', 'lazy', 'petite', 'kind', 'grumpy', 'last', 'first'];
var nouns =['breakfast', 'brother', 'evening', 'guitar', 'cat', 'mountain', 'mango', 'belly', 'forest', 'mirror', 'coconut', 'garden', 'ocean'];



function domainNameGenerator()
{
  var domains = pronouns.forEach(function(a) {
      adjs.forEach(function(b) {
          nouns.forEach(function(c) {
              var d = c.slice(0, -2);
              console.log(`${a + b + d}.${c[c.length-2] + c[c.length-1]}`);
          })
      })
  })
  return domains;
};

console.log(domainNameGenerator());

