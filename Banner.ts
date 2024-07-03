export class Banner {
    private mainHolder: any = null;
    private MooMooHolder: any = null;
    private TSHolder: any = null;

    public prepareBanner() {
        document.body.style.background = "#3d3d3d";
        this.mainHolder = document.createElement("div");
        this.mainHolder.style = `
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 30px;
        margin-top: 20px;
        color: #fff;
        font: 32px Arial;
        font-weight: bold;
        width: 90px;
        height: 100%;
        `;

        this.MooMooHolder = document.createElement("div");
        this.MooMooHolder.style = `
        position: absolute;
        bottom: 0;
        left: 0;
        font: 32px Arial;
        font-weight: bold;
        color: #f0f0f0;
        `;

        this.mainHolder.appendChild(this.MooMooHolder);

        this.TSHolder = document.createElement("div");
        this.TSHolder.style = `
        position: relative;
        top: 0;
        right: 0;
        font-weight: bold;
        font: 24px Arial;
        color: #2F74C0;
        `;
        this.mainHolder.appendChild(this.TSHolder);
    }
}