var uf = document.querySelector("#User-Form")
uf.addEventListener('submit',(val)=>{
    var eval = document.querySelector('#email').value
    var nval = document.querySelector('#Mobile-Number').value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eval) && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(nval))
    {}else{
        alert('not vaidated')
        val.preventDefault()
    }
})

function exportxl(){
    var table_elt = document.querySelector('#table-1');
    var table_elt2 = document.querySelector('#table-2');
    console.log(table_elt.textContent)
    // Extract Data (create a workbook object from the table)
    var workbook = XLSX.utils.table_to_book(table_elt, table_elt2);

    // Process Data (add a new row)
    var ws = workbook.Sheets["Sheet1"];
    XLSX.utils.sheet_add_aoa(ws, [["Created "+new Date().toISOString()]], {origin:-1});

    // Package and Release Data (`writeFile` tries to write and save an XLSB file)
    XLSX.writeFile(workbook, "Report.xlsx");
  }

