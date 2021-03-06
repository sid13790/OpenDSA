$(document).ready(function() {
    "use strict";
    var av_name = "Mathematical";
    var av = new JSAV(av_name);
    av.container.on('jsav-updatecounter', () => MathJax.Hub.Queue(["Typeset",MathJax.Hub]));
    var Frames = PIFRAMES.init(av_name);
    // Load the config object with interpreter and code created by odsaUtils.js
    var config = ODSA.UTILS.loadConfig({av_name: av_name}),
        interpret = config.interpreter, // get the interpreter
        code = config.code;             // get the code object
    var goNext = false;

    //frame 1
    av.umsg("The concept of a $set$ in the mathematical sense has a wide application in computer science. The notations and techniques of $set$ theory are commonly used when describing and implementing algorithms because the abstractions associated with $sets$ often help to clarify and simplify algorithm design.");
    av.displayInit();

    //frame 2
    av.umsg(Frames.addQuestion("q1"));
    av.step();

    //frame 3
    av.umsg(Frames.addQuestion("q2"));
    av.step();
    
    //frame 4
    av.umsg(Frames.addQuestion("q3"));
    av.step();

    //frame 5
    av.umsg(Frames.addQuestion("q4"));
    av.step();

    //frame 6
    av.umsg(Frames.addQuestion("q5"));
    av.step();

    //frame 7
    av.umsg(Frames.addQuestion("q6"));
    av.step();

    //frame 8
    av.umsg(Frames.addQuestion("q7"));
    av.step();

    //frame 9
    av.umsg(Frames.addQuestion("q8"));
    av.step();

    //frame 10
    av.umsg(Frames.addQuestion("q9"));
    av.step();

    //frame 11
    av.umsg(Frames.addQuestion("q10"));
    av.step();

    //frame 12
    av.umsg(Frames.addQuestion("q11"));
    av.step();
    
    //frame 13
    // av.umsg(Frames.addQuestion("q12"));
    // av.step();

    //frame 14
    av.umsg(Frames.addQuestion("q13"));
    av.step();

    //frame 15
    // av.umsg(Frames.addQuestion("q14"));
    // av.step();
    
    //frame 16
    av.umsg(Frames.addQuestion("q15"));
    av.step();

    //frame 17
    av.umsg(Frames.addQuestion("q16"));
    av.step();

    //frame 18
    av.umsg(Frames.addQuestion("q17"));
    av.step();

    //frame 19
    // av.umsg(Frames.addQuestion("q18"));
    // av.step();

    //frame 20
    av.umsg(Frames.addQuestion("q19"));
    av.step();
    
    //frame 21
    av.umsg(Frames.addQuestion("q20"));
    av.step();

    //frame 22
    av.umsg(Frames.addQuestion("q21"));
    av.step();

    //frame 23
    av.umsg(Frames.addQuestion("q22"));
    av.step();

    av.recorded();
});
    
  
