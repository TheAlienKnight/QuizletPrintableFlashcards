import jsPDF from 'jspdf'
class FlashcardPDF {
    doc;
    cardSet;
    widthCenter;
    heightCenter;
    constructor(cardSet) {
        console.log(cardSet)
        this.cardSet = cardSet
        this.doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a6',
            putOnlyUsedFonts: true
        })
        this.widthCenter = this.doc.internal.pageSize.getWidth() / 2
        this.heightCenter = this.doc.internal.pageSize.getHeight() / 2
        this.doc.setFont()
        // write title page since we are at it
        this.doc.setFontSize(22)
        this.doc.text(this.splitLines(this.cardSet.title, 110), this.widthCenter, 40, { align: 'center' })
        this.doc.setFontSize(20)
        this.doc.text(this.splitLines(this.cardSet.description, 110), this.widthCenter, 50, { align: 'center' })
        this.doc.setFontSize(18)
        this.doc.text(this.cardSet.dateLastEdited, this.widthCenter, 60, { align: 'center' })
        this.doc.addPage()
        this.doc.text("My Notes", this.widthCenter, 10, {align: 'center'})
        this.doc.line(0, 15, this.doc.internal.pageSize.getWidth(), 15)
        // begin cards
        this.processCards()
    }
    createCard(card) {
        //create new page for front
        this.doc.addPage()
        this.doc.setFontSize(26)
        this.doc.text(this.splitLines(card.term, 110), this.widthCenter, this.heightCenter, { align: 'center' })
        // making back
        this.doc.addPage()
        this.doc.setFontSize(16)
        this.doc.text(this.splitLines(card.definition, 140), 5, this.heightCenter-40, { align: 'left' })
    }
    setFont(font) {
        this.doc.setFont(font ? font : 'Helvetica')
    }
    setFontSize(fontSize) {
        this.doc.setFontSize(fontSize)
    }
    getFile() {
        this.doc.save('testing.pdf')
    }
    splitLines(text, maxMM) {
        return this.doc.splitTextToSize(text, maxMM ? maxMM : 140);
    }
    processCards() {
        this.cardSet.cards.forEach((card) => {
            this.createCard(card)
        })
    }
}
export { FlashcardPDF }