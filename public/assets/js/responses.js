function getBotResponse(input) {
    input = input.toLowerCase();

    if ((input.includes("read") && input.includes("preemptive")) || (input.includes("read") && input.includes("pps")) || (input.includes("read") && input.includes("priority"))) {
        return  `<a class="click" style="font-size: 16px" href="/priority.html">Preemptive priority</a><br>Click the above link`;
    } 
    else if ((input.includes("read") && input.includes("peterson")) || (input.includes("read") && input.includes("algorithm")) || (input.includes("read") && input.includes("solution"))) {
        return `<a class="click" style="font-size: 16px" href="/peterson.html">Peterson's Algo</a><br>Click the above link`;
    } 
    else if ((input.includes("read") && input.includes("fcfs")) || (input.includes("read") && input.includes("disk")) || (input.includes("read") && input.includes("first"))) {
        return `<a class="click" style="font-size: 16px" href="/fcfs.html">FCFS</a><br>Click the above link`;
    }
    else if((input.includes("read") && input.includes("optimal")) || (input.includes("read") && input.includes("opr")) || (input.includes("read") && input.includes("page")) || (input.includes("read") && input.includes("replacement"))) {
        return `<a class="click" style="font-size: 16px" href="/optimal.html">OPR</a><br>Click the above link`;
    }
    else if (input.includes("simulation-1") || input.includes("simulation1") || input.includes("simulation 1") || input.includes("pps") || input.includes("priority") || input.includes("preemptive")) {
        return  `<a class="click" style="font-size: 16px" href="/simulation1.html">Simulation-1(pps)</a><br>Click the above link`;
    } 
    else if (input.includes("simulation-2") || input.includes("simulation2") || input.includes("simulation 2") || input.includes("peterson")) {
        return `<a class="click" style="font-size: 16px" href="/simulation2.html">Simulation-2(peterson)</a><br>Click the above link`;
    } 
    else if (input.includes("simulation-3") || input.includes("simulation3") || input.includes("simulation 3") || input.includes("fcfs") || input.includes("first")) {
        return `<a class="click" style="font-size: 16px" href="/simulation3.html">Simulation-3(fcfs)</a><br>Click the above link`;
    }
    else if(input.includes("simulation-4") || input.includes("simulation4") || input.includes("simulation 4") || input.includes("opr") || input.includes("optimal") || input.includes("replacement")) {
        return `<a class="click" style="font-size: 16px" href="/simulation4.html">Simulation-4(opr)</a><br>Click the above link`;
    }
    else if (input.includes("simulation")) {
        return "We have simulation for 4 concepts of OS <br><a class=\"click\" style=\"font-size: 16px\" href=\"/simulation1.html\">Simulation-1(PPS)</a> <br><a class=\"click\" style=\"font-size: 16px\" href=\"/simulation2.html\">Simulation-2(Peterson)</a> <br><a class=\"click\" style=\"font-size: 16px\" href=\"/simulation3.html\">Simulation-3(FCFS)</a> <br><a class=\"click\" style=\"font-size: 16px\" href=\"/simulation4.html\">Simulation-4(OPR)</a>";
    }
    // else if (input.includes("help")) {
    //     return "How may I help you?"
    // }
    else if(input.includes("guide") || input.includes("tutorial") || input.includes("help")){
        return "Welcome to the World of OS <br>Thorough this website, we will be delivering you some OS projects like <br>Preemptive Priority Scheduling, <br>Peterson's solution, <br>First-Come-First-Serve (FCFS) disk scheduling<br>& optimal page replacement algorithm.\
        <br>To read about our project go to link: <a class=\"click\" style=\"font-size: 16px\" href=\"#about\">About</a><br>To know about us: <a class=\"click\" style=\"font-size: 16px\" href=\"#team\">Team</a> <br>To simulate the PPS,Peterson,FCFS and OPR Algorithms: <a class=\"click\" style=\"font-size: 16px\" href=\"#projects\">Projects</a>";
    }
    else if(input.includes("heart clicked")){
        return "Thank you.<br>Always happy to help"
    }
    else if (input.includes("documentation") || input.includes("read")) {
        return "To read about our project go to link: <a class=\"click\" style=\"font-size: 16px\" href=\"#about\">About</a><br>To know about us: <a class=\"click\" style=\"font-size: 16px\" href=\"#team\">Team</a> <br>To simulate the PPS,Peterson,FCFS and OPR Algorithms: <a class=\"click\" style=\"font-size: 16px\" href=\"#projects\">Projects</a>";
    }
    else if (input.includes("how are you")) {
        return "I am good and always happy to help you";
    }
    else if (input.includes("hello") || input.includes("hi")) {
        return "Hi how may I help you?!";
    } 
    else if (input.includes("bye")) {
        return "Tata see you soon!";
    }
    else if (input.includes("good morning")) {
        return "Very Good Morning";
    } 
    else {
        return "Try asking something else!";
    }
}