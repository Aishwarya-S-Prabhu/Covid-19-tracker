

       // $(document).ready(function(){
            init()


            function init(){
                var url =" https://api.covid19api.com/summary"

                var data = ''

                $.get(url,function(data){
                    console.log(data.Global.NewDeaths);

                    data= `
                    
                    <td>${data.Global.TotalConfirmed} </td>
                    <td>${data.Global.TotalDeaths} </td>
                    <td>${data.Global.TotalRecovered} </td>
                    <td>${data.Global.Date} </td>
                    `

                    $("#data").html(data)

                })
            }

            function refresh(){
                clearData()
                init()
            }

            function clearData(){
                $("#data").empty()

            }
       // })
        

