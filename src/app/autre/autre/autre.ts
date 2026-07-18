import { Component, signal, computed } from '@angular/core';
@Component({
  selector: 'app-autre',
  standalone: true,
  templateUrl: './autre.html',
})
export class Autre {
  items = signal<{ id: number; name: string; price: number }[]>([
  ]);
  item=signal<{id:number;name:string;price: number}[]>([]);
  name=signal<string>('');
  price=signal<number | null>(null);
  newName = signal<string>('');
  newPrice = signal<number | null>(null);
soustotal=computed(()=>this.item().reduce((sum,item)=>sum+item.price,0));
tax=computed(()=>this.soustotal()* 0.20);



  whatsappNumber = '237683260520'; 

  subtotal = computed(() => this.items().reduce((sum, item) => sum + item.price, 0));
  // tax = computed(() => this.subtotal() * 0.20);
  total = computed(() => this.subtotal() + this.tax());
  itemCount = computed(() => this.items().length);

  addItem() {
    const name = this.newName().trim();
    const price = this.newPrice();

    if (name && price && price > 0) {
      this.items.update(currentItems => [
        ...currentItems,
        { id: Date.now(), name: name, price: price }
      ]);
      
      this.newName.set('');
      this.newPrice.set(null);
    }
  }

  sendToWhatsApp() {
    if (this.itemCount() === 0) return;

    let message = `🛒 *Nouvelle Commande*\n\n`;
    
    this.items().forEach(item => {
      message += `• ${item.name} — ${item.price} F\n`;
    });

    message += `\n-------------------------\n`;
    message += `💰 *Sous-total :* ${this.subtotal()} F\n`;
    message += `🧾 *TVA (20%) :* ${this.tax()} F\n`;
    message += `⭐️ *Total à payer : ${this.total()} F*`;

    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me{this.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }
}
