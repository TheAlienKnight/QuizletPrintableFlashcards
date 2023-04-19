import jsPDF from 'jspdf'
class FlashcardPDF {
    doc;
    cardSet;
    widthCenter;
    heightCenter;
    constructor(cardSet) {
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
        this.doc.text("My Notes", this.widthCenter, 10, { align: 'center' })
        this.doc.line(0, 15, this.doc.internal.pageSize.getWidth(), 15)
        // begin cards
        this.processCards()
    }
    createCard(card) {
        //create new page for front
        this.doc.addPage()
        this.doc.setFontSize(this.adjustTitleSize(card.term))
        // checks if it's been adjusted, and modifies the "center" accordingly
        this.doc.text(this.splitLines(card.term, 110), this.widthCenter, this.adjustTitleSize(card.term) == 26 ? this.heightCenter : this.heightCenter - 30, { align: 'center' })
        // making back
        this.doc.addPage()
        this.doc.setFontSize(this.adjustContentSize(card.definition))
        this.doc.text(this.splitLines(card.definition, 140), 5, this.heightCenter - 40, { align: 'left' })
    }
    setFont(font) {
        this.doc.setFont(font ? font : 'Helvetica')
    }
    setFontSize(fontSize) {
        this.doc.setFontSize(fontSize)
    }
    getFile() {
        this.doc.save(`${this.cardSet.title.replace(/([^a-z0-9]+)/gi, '')}.pdf`)
    }
    splitLines(text, maxMM) {
        return this.doc.splitTextToSize(text, maxMM ? maxMM : 140);
    }
    processCards() {
        this.cardSet.cards.forEach((card) => {
            this.createCard(card)
        })
    }
    adjustTitleSize(content) {
        if (content.length > 45) { // anything beyond this usually won't need resizing
            return Math.fround(26 - (1 * (content.length * 0.025))) // this took a long amount of fiddling to get right. per each letter, adjust font size by subtracting from the default of 26
        } else return 26; // 26 is a good "default" from what I can tell
    }
    adjustContentSize(content) {
        if (content.length > 500) { // may need tweaking down the line
            return Math.fround(16 - (0.3 * (content.length * 0.01))) // on testing, this worked the best for fitting it on a notecard, while keeping it readable. 
        } else return 16; // 16 is the general "easy to see" size (and printed on notecards, it is normally readable)
    }
}
export { FlashcardPDF }