import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient, json } from 'aurelia-fetch-client';
var Plotly = require('plotly.js');

@inject(Router)
export class DayTwo {
  constructor(router) {
    this.router = router;
    this.showAnswer = true;

    this.exampleOneAnswer = '';
    this.exampleTwoAnswer = '';
    this.exampleThreeAnswer = '';
    this.exampleFourAnswer = '';
    this.mainAnswerAnswer = '';

    this.partTwoExampleOneAnswer = '';
    this.partTwoExampleTwoAnswer = '';
    this.partTwoExampleThreeAnswer = '';
    this.partTwoExampleFourAnswer = '';

    this.partTwoAnswer = '';

    this.answerLoop = 0;
  }

  attached() {
    this.partOne();
  }

  getTestData() {
    return `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;
  }


  callback(data) {
  }

  partOne() {
    let dataArray = this.getMainData().split('\n');

    let twoCount = 0;
    let threeCount = 0;

    for (let i = 0; i < dataArray.length; i++) {
      let hasTwos = false;
      let hasThrees = false;

      let nonUnique = dataArray[i];
      let unique = nonUnique.split('').filter(function (item, i, ar) { return ar.indexOf(item) === i; }).join('');

      for (let k = 0; k < unique.length; k++) {
        let char = unique[k];
        let charCount = nonUnique.split(char).length - 1;

        switch (charCount) {
          case 2:
            hasTwos = true;
            break;
          case 3:
            hasThrees = true;

          default:
            break;
        }
      }

      if (hasTwos) {
        twoCount++;
      }
      if (hasThrees) {
        threeCount++;
      }
    }

    this.mainAnswerAnswer = threeCount * twoCount;
  }

  partTwo() {
    let partTwoExampleOne = '+1, -1';
    let partTwoExampleTwo = '+3, +3, +4, -2, -4';
    let partTwoExampleThree = '-6, +3, +8, +5, -6';
    let partTwoExampleFour = '+7, +7, -2, -7, -4';


    // this.partTwoAnswer = this.getAnswerTwo(this.getMainData());
    showAnswer = true;
  }

  getMainData() {
    return `qysdgimlcaghpfozuwejmhrbvx
qysdtiklcagnpfhzuwbjmhrtvx
qysdtiflcsgnpfozuwejmhruvx
qkshtiklnagnpfozuwejmhrbvx
qysdtnklcagnpmozuwejmhrrvx
qysdttkecagnpfozuwijmhrbvx
qyedtiklcagnvfozuweymhrbvx
qyzdtikzcagnpfozuwejmhqbvx
qysdtiklcagnpfozlwedmhqbvx
qjsdtiklcagnpfozubejmhrbvq
qysdtiklcagnpfozvvejmhrbex
qdsdziklcagnpfouuwejmhrbvx
qysttikqccgnpfozuwejmhrbvx
qysdtiklcagnpbozwwecmhrbvx
qysdtiklcagnpfozuwexmmrjvx
nysdtiklcqgjpfozuwejmhrbvx
cysdoiqlcagnpfozuwejmhrbvx
qysdthxlcagnpfozuwejmcrbvx
qyswtiklcrgnpfozuwejmhrbvf
qysdtiklcagnpfozurejmhvpvx
qysdtiklcegnpfdzuwejghrbvx
qysdtjkluagnpfozuwenmhrbvx
qysdtimlcagnpjwzuwejmhrbvx
qyrdtiklcegnpeozuwejmhrbvx
qysdmiklcagnpfokswejmhrbvx
qysdtizlcagnpiozuwecmhrbvx
qysdtiklcignafxzuwejmhrbvx
qycdjiklcagnpzozuwejmhrbvx
qysdtiklcagnpjozuwepihrbvx
qyedtiklcrgnpfozuvejmhrbvx
mysdtikrcagnpfozwwejmhrbvx
qysdtiklcagnpfozuhcjmhrbsx
qmsdtiklcagnpfozuwehmhrevx
qgsdtiklcagnpfozuwejvhrbvp
lysdtikleagnpfozuwejmhrnvx
qxsdtivlzagnpfozuwejmhrbvx
qysdtiklcoggpfozuwebmhrbvx
wysdtiklcagnpfozuwejmornvx
jysdtiklvagntfozuwejmhrbvx
qmsdtiklcagnpfozuwejmrrbax
qysdttklcagnpfoiuwejmhrbvh
qysdtnklcaenpfozupejmhrbvx
qysdtoklcagnpfozuwexmhrbvq
qysdtiklcagnpuoeuwejmhrjvx
iysdtitncagnpfozuwejmhrbvx
qysdtixrcagnprozuwejmhrbvx
qyfdtiplcagnpfouuwejmhrbvx
qysdtmklcagnpfowuwejmhrbox
qysdtiklcagnxiozuwejphrbvx
fysdtiklcagnptozuwejmhrbvo
qysdqiklcagnplozuwejmhmbvx
qysdtwkacagnpfosuwejmhrbvx
qysdtitlcagnpfozufajmhrbvx
qysdtcklcagopfdzuwejmhrbvx
qmfdtdklcagnpfozuwejmhrbvx
qysztiklcaonpfozuwejmhrbfx
qygdtiklcggnpfozuwejmhrhvx
qysdiiklcagnpfozukejmcrbvx
qysdtrkloagnpfozuwujmhrbvx
qycdtiklcagnpfozywejmhrlvx
qgsdtikdcagnpfozgwejmhrbvx
qyudtikleagvpfozuwejmhrbvx
pysdtiqlcagnpfozuwejmarbvx
qysdtiklcaenpfozuwehahrbvx
qhsttiklcagnpfovuwejmhrbvx
zysdtikqmagnpfozuwejmhrbvx
rysdtikacagnpfozuwevmhrbvx
zysntikllagnpfozuwejmhrbvx
qysttimlcagndfozuwejmhrbvx
qysdtiklcaxopfqzuwejmhrbvx
qysdtislcagnpfozuwejmtrbnx
qysdviklcagnpfozswejmhibvx
qmsdtiklrygnpfozuwejmhrbvx
qysztiklcagnpfozuwejmorbrx
xysdtiklcagnzwozuwejmhrbvx
qysjthklcagnpfozowejmhrbvx
qysdtiklcagnpfofxwemmhrbvx
jysdtiklcagnpfozfwehmhrbvx
qysdtgklaagnpfozhwejmhrbvx
qqsdtiklcaenpfozuwejmhrvvx
qysdtikloajppfozuwejmhrbvx
qysdtiklcagnpwozuwejmhrhsx
qpsdtiklcapnprozuwejmhrbvx
qyzdtiklcagnpcozuwejmhrbvc
qusdhiklcagnpfozuwejmhrbxx
qysdtiklcagnpfozqwejthrvvx
qysvtiklcagnpfoiuwedmhrbvx
qgsdtiklcagvpfozuwejmhrbvf
qysdtikxcawnpfozuwejmarbvx
qyvctiklcaynpfozuwejmhrbvx
qyyltiklnagnpfozuwejmhrbvx
oysdtillcagnpfozuwejmnrbvx
qysdtiklcagnpfozuvmjmhrbzx
qykdtikocagnpfhzuwejmhrbvx
qysdtvkloagnpfozuwejmkrbvx
qysetiklcagnpfozuwejmhrxvh
qysdtiklcavnpfuzuwejmhrbvh
qmndtiklcagnpfojuwejmhrbvx
qysdtialcagnpfozuwejmdrqvx
qysdtiklcagnpfozuwejtzrbvv
qysdtiklxagnpyozufejmhrbvx
qysdtiklcagnpfgzewejahrbvx
qysdtiklcagppsozuwejmhrdvx
qykdtiklcainpfozuwejqhrbvx
qysdtiklcagnpfszxwejmhubvx
qyrdtiklcagkptozuwejmhrbvx
qysdsiklcagnpfozsvejmhrbvx
qypdtiklcagypfozuwejmhrlvx
qssdtiklcagnpfozuwqjmirbvx
qyshtiklcagnpfrzuwyjmhrbvx
qysdtiklcagnpfqzuwenmgrbvx
qysdtiklcagnpfonuwejmhkwvx
qysdhiklcagnpfokuwejmhrfvx
jysrtiklcaenpfozuwejmhrbvx
qysdtiilcagnpfozuwejmhcbvl
qysdtiklcagnheozuwejmhrbvn
qysdtikucagwpfojuwejmhrbvx
qysdtinlctgnpfozuwujmhrbvx
qysdtiklcagnpiozuwejmtrbjx
qysktiklcagqpfozuwcjmhrbvx
qysddiklcagnpfozpwejmhrbvh
wysdtiplcagnpfozuwejyhrbvx
qysdtiklcagnpfjzlwejmhrcvx
qysdtikleagopbozuwejmhrbvx
qysdtqklcwgnpfozuwejmirbvx
qysdtiklcugnpmozuwejmhrbvp
qysdtiklcagnpfozpwejmnrbvz
qysdtiklcagnpcozuwejmhbbmx
uysitiklcagnpfozewejmhrbvx
qykdtiklcasnpfozuwejdhrbvx
qyjdtiklcagnpqozuzejmhrbvx
qysdtiklcagaifozuwejmhrbvh
qysdtiklcagnhfozuwyjrhrbvx
qysetiklcaanpfozuwyjmhrbvx
qyfdtiklcagnphozulejmhrbvx
qysdtikkcrgnpfozuwejmhpbvx
qysdtiklcarnpfdzuwejmhrbvq
qysdtiklcfyrpfozuwejmhrbvx
rysdtitlcagnpfoznwejmhrbvx
qysdtiilcagnffozugejmhrbvx
qysdyifloagnpfozuwejmhrbvx
qysdtiklcegnpfozuwejmlrcvx
qysdtiklcagnpfozuwajmhbbqx
qysptrklcarnpfozuwejmhrbvx
qysdtiklcagnldozuwejmhwbvx
qysdtiklczgqpfozuwejmhobvx
qyxdtiklcagcpfoiuwejmhrbvx
qysatiklczgnpfozawejmhrbvx
qysduiklcagnpfoziwejyhrbvx
qysdtgklqagnpfozujejmhrbvx
qysdtiqlcagnpfozzdejmhrbvx
qysdtiklcngnpfofuwejmzrbvx
qysdtiklcagnyfozuwejrnrbvx
qysdtiplcagnpfozowmjmhrbvx
qyswtiklcagnplozuwedmhrbvx
qyseiiklcagnpfozuwejmhibvx
qysdtiklcagnpfozutusmhrbvx
qysdtimlcagnpfozccejmhrbvx
qnsdniklcagnpfobuwejmhrbvx
qysrtiklcagnpfofuwejmhrbyx
qyzdtiklcagnpfoizwejmhrbvx
qysdtjslcdgnpfozuwejmhrbvx
qysdtiklcagnpxoyuwejmrrbvx
qysdtikllagnpfmzuwbjmhrbvx
qysdtitlcagnkfozuwejwhrbvx
qymdtiklcggnpfozuwejmzrbvx
qysdtiklclfnpfozuhejmhrbvx
qysdtyklcagnpfozuwejmhhbix
qysetiklcagnpfozuwejmhrspx
qysdipklcagnpfozuwejmhrbex
uysgtiklcagnpmozuwejmhrbvx
qysdtiklmagnpfozuwqlmhrbvx
qysdtiklcagnyfozxwejmhrmvx
qysutillcagnpfozuwejmhrbbx
casdtiklcagnpfopuwejmhrbvx
qesdtiklctgnpfmzuwejmhrbvx
qysdtiklcagopfozjwejmdrbvx
jzsdtiklcagnpfozuwejmurbvx
qysdtiklcjgnpfonuwejrhrbvx
qysdtiklcrgnpnozuwejmhqbvx
oyhdtiklcagnpfozuwekmhrbvx
qysstiklcagjpfozuwejmhrbnx
qyudtiklsagnpsozuwejmhrbvx
qysdtiilcagnpfozusejmhrbva
qysdtiklcaknpfozmwejmhgbvx
qysdbiklcpgnpfozuwejmrrbvx
qybdtiklcagvpfokuwejmhrbvx
qysatiklcagnpwofuwejmhrbvx
qysdtiklcadnpfonuwejmcrbvx
qysdtijfcagnpfozuvejmhrbvx
qysdtiklcagnpfhluuejmhrbvx
qysdtiklcagnpfoguwejqhrwvx
qlsdtiklcagnpfojuwehmhrbvx
qyhdtiolcagnpfozuwejmhrzvx
qmsdtiklcagnppozuwpjmhrbvx
qysdtiklvvgnpfvzuwejmhrbvx
qysdtiklcagnpfszuwajmhrcvx
qysdtiklcagnpfmzuwekmhrbyx
qysdtiklcagwpfozumevmhrbvx
qysdtaklcagnpfozuwejvhzbvx
qysotiklcagntffzuwejmhrbvx
qysdtiklcagnpfowuweqmhrivx
qysdtrkloagnxfozuwujmhrbvx
qasdiiklcagnpfozuwegmhrbvx
qysbtiklcagnpfozuwejthrbhx
hysdtikllagnpfozuwejmhrbbx
qyqdtiklcagnpsozuwejmcrbvx
qysdtiklcagnpiqzuwejmhrbux
qnsdtiklcagnpfozdwejmhbbvx
qysjbiklcagzpfozuwejmhrbvx
qysdtiklcagnpfifuwejmhrbvg
qysdtiklcaggpkozunejmhrbvx
qxsdtiklcavnpfozuwfjmhrbvx
qysdtikycabnpfkzuwejmhrbvx
qyswtzklcagnpfozuwejmhrlvx
qysdtikqcagnpfozuwejrhnbvx
qysdtiplaagnpfozuwejmhruvx
qjcdtiklcagnpfozujejmhrbvx
nysdtyklcagnpfozutejmhrbvx
qysrtiklcagnpfnzuwejmhrbdx
zysdtielcagnpfozuwezmhrbvx
qysdtikpvagnpfozuzejmhrbvx
qysdwiklcagnpfozueejmhrlvx
dysdmiklcagnpfozuwejzhrbvx
qysdtiklcjgnpfozuweimhmbvx
qysdtiklciynpyozuwejmhrbvx
qksdtiklcagnpbozubejmhrbvx
qysdtiklkagnpfozuwejmhrjvb
yyxdtiklcagnpfomuwejmhrbvx
qysdtiklcagnfnozuwejmhrbvv
qysdtzklcagnpfozuwejmhrmvb
qysduiklclgnpfozuwejmhrbvn
qyndtmklcavnpfozuwejmhrbvx
qisdkiklcagnpfozuwqjmhrbvx
qysdtrkycagypfozuwejmhrbvx
qhsdtiklcwgnmfozuwejmhrbvx
qysdaiklcannpfozupejmhrbvx
zysdtiklcagnpjozuwejmhrbwx
qysdtikxcagnpfozuwejmcrxvx
qysdtzklcagnpfozewejmhrbvk
qysdwtklcagnhfozuwejmhrbvx
qysdtqklcaenpfozuwejmdrbvx
qysdtiklcagnpfozuoeemhqbvx
nysdtikocagnpfozuwejmhwbvx
qysxtiklcagnpfozqwejmhrbax
qysdtielcasnpfozuwejmhsbvx
qysdtiklcaknpfozuwejcwrbvx
qysytiklcagnpfozdfejmhrbvx
qysdtiklcagmpfozuwejmgrbox
qysdtielcagnpfpzuwejhhrbvx`
  }
}
