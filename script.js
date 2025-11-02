class Sender 
{
    constructor(){
        this.inpSender = document.getElementById("inp_sender");
        this.btnSubmit = document.getElementById("btn_submit");
    }

    submit()
    {
        let content = this.inpSender.value;
        
        if(content != "" && content != " ")
        {
            let headerContent = document.createElement("h1");
            headerContent.textContent = content;
    
            document.body.appendChild(headerContent);
    
            this.inpSender.value = "";
        }
    }


}

const sender = new Sender();

sender.btnSubmit.addEventListener("click", () => {
    sender.submit();
})