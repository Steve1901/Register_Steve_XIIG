document.getElementById("registerform").addEventListener("submit", function(e){
        e.preventDefault();
        
        //ambil nilai dari input
        const name = document.getElementById("Name").value;
        const email = document.getElementById("Email").value;
        const password = document.getElementById("Password").value;
        const noHp = document.getElementById("noHp").value;
        const tanggalLahir = document.getElementById("TanggalLahir").value;
        
        // buat simpan di local storage
        const user = {
            name: name,
            email: email,
            password: password,
            noHp: noHp,
            tanggalLahir: tanggalLahir
        };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Sukses mantap isi dua");
        
        // masukin data ke tabel secara otomatis
        const table = document.getElementById("datatable").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();
        
        
        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = email;
        newRow.insertCell(2).textContent = password;
        newRow.insertCell(3).textContent = noHp;
        newRow.insertCell(4).textContent = tanggalLahir;
        
        document.getElementById("registerform").reset();
    });