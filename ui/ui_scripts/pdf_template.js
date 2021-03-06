//aking - generate a pdf from html elemets with the content class.


function createPDF() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    
    source = $j('#content')[0];

        specialElementHandlers = {
        
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true;
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        pdf.save('Test.pdf');
    }, margins);
}

// For test purposes only
function createPDFBasic(){
	var doc = new jsPDF();
		doc.text(20,20, "Hello World!");
		doc.text(20,30, "Second Hello World!");
		doc.addPage();
		doc.text(20,20, "Hello World Page 2");
		doc.save('pdfbook.pdf');
}
	