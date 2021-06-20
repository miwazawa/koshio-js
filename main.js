function run(){
    var out_str = "誘惑に弱いのね";
    var all_member = [];
    var checked_member = [];
    all_member = all_member.concat(Array.from(document.getElementsByName("member")));
    
    for (let i = 0; i< all_member.length; i++){
        if (all_member[i].checked){
            checked_member.push(all_member[i].value + "/n");
        }
    }

    var out_str = checked_member.join("") + "/nこんにちは";
    document.getElementById("output").innerText = out_str;
}