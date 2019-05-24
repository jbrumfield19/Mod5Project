const nlp = require('natural');
const jsonfile= require('./trainingData.json')
// console.log(jsonfile)
// const jsondata = jsonfile.readFileSync("jsoncontent.json")
const tokenizer = new nlp.WordTokenizer();
var classifier = new nlp.BayesClassifier();
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer.attach();
var analyzer = new Analyzer("English", stemmer, "afinn");
function languageProcessor(text){
     const textToken = tokenizer.tokenize(text)
     return analyzer.getSentiment(textToken)
}
// console.log(analyzer.getSentiment(tokenizer.tokenize('wubalubadubdub')))
module.exports= languageProcessor