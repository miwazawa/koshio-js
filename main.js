function run(){
    var all_member = [];
    var checked_member = [];
    all_member = all_member.concat(Array.from(document.getElementsByName("member")));
    
    for (let i = 0; i< all_member.length; i++){
        if (all_member[i].checked){
            checked_member.push(all_member[i].value + "\n");
        }
    }

    if (checked_member.length == 0){
        var out_str = "なんかチェックつけて";
        document.getElementById("output").innerText = out_str;
    }
    else{
        var out_str = checked_member.join("") + "こんにちは";
        document.getElementById("output").innerText = out_str;
    }
}