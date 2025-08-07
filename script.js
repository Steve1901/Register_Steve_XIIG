document.getElementById("registerform").addEventListener("submit", function(e){
        e.preventDefault();
        
        const name = document.getElementById("Name").value;
        const email = document.getElementById("Email").value;
        const password = document.getElementById("Password").value;
        const noHp = document.getElementById("noHp").value;
        const tanggalLahir = document.getElementById("TanggalLahir").value;
        
        const table = document.getElementById("datatable").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();
        
        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = email;
        newRow.insertCell(2).textContent = password;
        newRow.insertCell(3).textContent = noHp;
        newRow.insertCell(4).textContent = tanggalLahir;
        
        document.getElementById("registerform").reset();
    });