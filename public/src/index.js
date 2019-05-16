const nlp = require('natural');
const tokenizer = new nlp.WordTokenizer();
var classifier = new nlp.BayesClassifier();
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer.attach();
var analyzer = new Analyzer("English", stemmer, "afinn");
const toke= tokenizer.tokenize("ethan is not the best")
const thing = toke.map(tke=> tke.stem())
console.log(thing)
console.log(analyzer.getSentiment(thing))