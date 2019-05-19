const nlp = require('natural');
const jsonfile= require('./trainingData.json')
// console.log(jsonfile)
// const jsondata = jsonfile.readFileSync("jsoncontent.json")
const tokenizer = new nlp.WordTokenizer();
var classifier = new nlp.BayesClassifier();
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer.attach();
var analyzer = new Analyzer("English", stemmer, "afinn");
const pcomments = jsonfile.map(d =>tokenizer.tokenize(d.positivecomment))
const ncomments = jsonfile.map(d =>tokenizer.tokenize(d.negativecomment))
const positive=pcomments.map(p=> classifier.addDocument(p, 'good'))
const negative=ncomments.map(p=> classifier.addDocument(p, 'bad'))
// classifier.addDocument(pcomments, 'good')
// classifier.addDocument(ncomments, 'bad')

classifier.train()

console.log(classifier.classify(''))
// console.log(pcomments.flat())
// console.log(analyzer.getSentiment(tokenizer.tokenize('wubalubadubdub')))
