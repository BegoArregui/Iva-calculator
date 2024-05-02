
        

        var importe, importeneto, iva, ivan;
        importe = Number(prompt("Dime el importe que quieres calcular:"));
        iva = prompt("Dime el tipo de IVA:");
        importeneto=Number;
        ivan = Number;

        switch (iva) {
            case "A":
                ivan = importe * 0.21;
                importeneto = (importe + ivan);
                document.write("<p align='center'><font size='8px' color='black'>Tu importe bruto es " + importe + "€<p align='center'><font size='8px' color='#545677'>Tu IVA es " + ivan + "€<p align='center'><font size='8px' color='#5158BB'>Tu importe neto es " + importeneto + "€");
                break;

            case "B":
                ivan = importe * 0.15;
                importeneto = (importe + ivan);
                document.write("<p align='center'><font size='8px' color='black'>Tu importe bruto es " + importe + "€<p align='center'><font size='8px' color='#545677'>Tu IVA es " + ivan + "€<p align='center'><font size='8px' color='#5158BB'>Tu importe neto es " + importeneto + "€");
                break;

            case "C":
                ivan = importe * 0.10;
                importeneto = (importe + ivan);
                document.write("<p align='center'><font size='8px' color='black'>Tu importe bruto es " + importe + "€<p align='center'><font size='8px' color='#545677'>Tu IVA es " + ivan + "€<p align='center'><font size='8px' color='#5158BB'>Tu importe neto es " + importeneto + "€");
                break;

            case "D":
                ivan = importe * 0.04;
                importeneto = (importe + ivan);
                document.write("<p align='center'><font size='8px' color='black'>Tu importe bruto es " + importe + "€<p align='center'><font size='8px' color='#545677'>Tu IVA es " + ivan + "€<p align='center'><font size='8px' color='#5158BB'>Tu importe neto es " + importeneto + "€");
                break;

            default:
                document.write("<p align='center'><font size='10px' color='red'>El tipo de IVA no es correcto, prueba con A, B, C o D.");
                break;

                }