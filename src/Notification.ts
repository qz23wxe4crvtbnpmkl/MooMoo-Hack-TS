class NotificationManager {
  static holder: HTMLElement = document.createElement("div");
  static notifications: Notification[] = [];

  static init(): void {
    NotificationManager.holder.style.cssText = `
      position: fixed;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: auto;
      height: 200%;
      text-align: center;
      pointer-events: none;
      z-index: 99999;
    `;
    document.body.appendChild(NotificationManager.holder);
  }
}

export class Notification {
  private text: string;
  private life: number;
  private color: string;
  private notification: HTMLElement;

  constructor(text: string, life: number, color: string) {
    this.text = text;
    this.life = life;
    this.color = color;

    this.notification = document.createElement("div");
    this.notification.style.cssText = `
      width: auto;
      position: relative;
      top: 0;
      margin: 10px auto;
      background: ${this.color};
      border: 4px solid rgba(0, 0, 0, 0.1);
      padding: 10px 30px;
      border-radius: 8px;
      font-weight: 900;
      font: 18px sans-serif;
      letter-spacing: 1.35px;
      vertical-align: middle;
      line-height: 30px;
      transition: 3s top, 0.5s opacity;
      color: rgba(225, 225, 225, 1);
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
    `;
    this.notification.innerText = this.text;

    NotificationManager.notifications.push(this as unknown as Notification);
    NotificationManager.holder.appendChild(this.notification);

    setTimeout(() => {
      this.notification.style.opacity = "0";
      this.notification.style.top = "-200px"; // to make it fade upwards
      // maybe in future we make it scale 0.75%

      // remove the notif after a bit
      setTimeout(() => {
        NotificationManager.holder.removeChild(this.notification);
        const index = NotificationManager.notifications.indexOf(this as unknown as Notification);
        if (index !== -1) {
          NotificationManager.notifications.splice(index, 1);
        }
      }, 500);
    }, this.life);
  }
}

NotificationManager.init();