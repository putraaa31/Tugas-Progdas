var namabuku = ["Harry Potter","Dilan","Bumi","Selena","Nebula","Laskar Pelangi","Si Putih","Bulan"]
      var bataswaktupinjam = ["7 Hari","7 Hari","7 Hari","7 Hari","7 Hari","7 Hari","7 Hari","7 Hari"]
      var gambarbuku = ["https://upload.wikimedia.org/wikipedia/id/5/56/Harry_potter_deathly_hallows_US.jpg","https://www.gramedia.com/blog/content/images/2019/02/dilan-1990.jpeg","https://upload.wikimedia.org/wikipedia/id/thumb/4/49/Bumi_%28sampul%29.jpg/220px-Bumi_%28sampul%29.jpg","https://tasyrifunnisa.files.wordpress.com/2020/06/inshot_20200630_165330032.jpg?w=686","https://i.pinimg.com/originals/eb/dc/29/ebdc2929db1d3bbfc9cf220e2d7acd7b.jpg","https://upload.wikimedia.org/wikipedia/id/thumb/8/8e/Laskar_pelangi_sampul.jpg/220px-Laskar_pelangi_sampul.jpg","https://digibunda.com/wp-content/uploads/2020/11/Novel-PDF-Free-Novel-Si-Putih-Unedited-Version-by-Tere-Liye.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXAYBO7AymsDJMDd9JrteHnJPuICRkjyPThaQoCcFU2rjU_AAlXi8b2mYb-3ZaLEPXKM&usqp=CAU"]
      var banyakbuku = [1,2,3,4,5,6,7,8,]

      var listproduk = document.getElementById("listproduk")
      var listkeranjang = document.getElementById("listkeranjang")
      var tampilantotalbuku = document.getElementById("totalbuku")
      var namabuku_keranjang = []
      var bataswaktupinjam_keranjang = []
      

      

      
      function showlistproduk(){
        listproduk.innerHTML =""

        for ( let i = 0; i < namabuku.length; i++){
          listproduk.innerHTML += '<div class="card float-left mr-3 mb-3" style="width: 12rem;">'+
            '<img src="'+gambarbuku[i]+'" class="card-img-top" alt="...">'+
            '<div class="card-body">'+
              '<h5 class="card-title">'+namabuku[i]+'</h5>'+
              '<p class="card-text">'+bataswaktupinjam[i]+'</p>'+
              '<a href="#" class="btn btn-primary" onclick="addlistitem('+i+')">Pinjam</a>'+
            '</div>'
        }

      }

      function addlistitem(id){
        namabuku_keranjang.push(namabuku[id])
        bataswaktupinjam_keranjang.push(bataswaktupinjam[id])

        showlistkeranjang()
      }

      function showlistkeranjang(){
        listkeranjang.innerHTML = ""
        var totalbuku = 0
        var totalx = 0

        for (let i = 0; i < namabuku_keranjang.length; i++){
          listkeranjang.innerHTML += '<div class="card mt-3 mb-3" style="width: 70rem;">'+
            '<div class="card-body">'+
              '<h5 class="card-title">'+namabuku_keranjang[i]+'</h5>'+
              '<p class="card-text">'+bataswaktupinjam_keranjang[i]+'</p>'+
              '<p class="card-text">Qty : 1</p>'+
              '<a href="#" class="btn btn-danger float-right" onclick="deleteitem('+i+')">Hapus</a>'+
            '</div>'+
          '</div>'

          totalbuku = i+1
          totalx = totalbuku
          tampilantotalbuku.innerHTML = totalx
           
          
        }
      
      }
      

      showlistproduk()

      function deleteitem(id){
            namabuku_keranjang.splice(id,1)
            bataswaktupinjam_keranjang.splice(id,1)

            showlistkeranjang()
      }

  
      var nama = []
        var nohp = []
        var email = []
        var buku = []
        var waktu = []

        var tampil = document.getElementById("tampildata")

        function showData(){
            tampil.innerHTML = ""

            for( i = 0; i<nama.length; i++ ){
                var nodata = i+1

                tampil.innerHTML += "<tr>"+
                "<th>"+nodata+"</th>"+
                "<td>"+nama[i]+"</td>"+
                "<td>"+nohp[i]+"</td>"+
                "<td>"+email[i]+"</td>"+
                "<td>"+buku[i]+"</td>"+
                "<td>"+waktu[i]+"</td>"+
                "<td>"+
                    "<button class='btn btn-warning'onclick='edit("+i+")'>Edit</button>"+
                    "<button class='btn btn-danger'onclick='reset("+i+")'>Reset</button>"+
                "</td>"+
              "</tr>"
            }
        }

        showData()

        function add(){
            var namabaru = document.getElementById("txt_nama").value
            var nohpbaru = document.getElementById("txt_nohp").value
            var emailbaru = document.getElementById("txt_email").value
            var waktubaru = document.getElementById("txt_waktu").value
            var bukubaru = document.getElementById("listkeranjang")

            nama.push(namabaru)
            nohp.push(nohpbaru)
            email.push(emailbaru)
            waktu.push(waktubaru+" Hari")
            buku.push(namabuku_keranjang)

            showData()
        }

        function reset(i){
            var namabaru = document.getElementById("txt_nama").value
            var nohpbaru = document.getElementById("txt_nohp").value
            var emailbaru = document.getElementById("txt_email").value
            var waktubaru = document.getElementById("txt_waktu").value

            nama.splice(i,1)
            nohp.splice(i,1)
            email.splice(i,1)
            waktu.splice(i,1)

            showData()
        }

        function edit(i){
            var namabaru = document.getElementById("txt_nama").value
            var nohpbaru = document.getElementById("txt_nohp").value
            var emailbaru = document.getElementById("txt_email").value
            var waktubaru = document.getElementById("txt_waktu").value

            nama.splice(i,1,namabaru)
            nohp.splice(i,1,nohpbaru)
            email.splice(i,1,emailbaru)
            waktu.splice(i,1,waktubaru+" Hari")

            showData()
        }

        showData()
