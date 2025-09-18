function regressaoLinear(x, y) {
    if (x.length !== y.length) {
        throw new Error("Os vetores x e y devem ter o mesmo tamanho.");
    }
 
    const n = x.length;
 
    const media = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    const mediaX = media(x);
    const mediaY = media(y);
 
    let numerador = 0;
    let denominador = 0;
 
    for (let i = 0; i < n; i++) {
        numerador += (x[i] - mediaX) * (y[i] - mediaY);
        denominador += (x[i] - mediaX) ** 2;
    }
 
    const a = numerador / denominador; // coeficiente angular (inclinação)
    const b = mediaY - a * mediaX;     // coeficiente linear (intercepto)
 
    // Calcular R²
    let somaTotal = 0;
    let somaResiduos = 0;
 
    for (let i = 0; i < n; i++) {
        const yEstimado = a * x[i] + b;
        somaTotal += (y[i] - mediaY) ** 2;
        somaResiduos += (y[i] - yEstimado) ** 2;
    }
 
    const r2 = 1 - (somaResiduos / somaTotal);
 
    return {
        equacao: `y = ${a.toFixed(4)}x + ${b.toFixed(4)}`,
        a: a,
        b: b,
        r2: r2
    };
}
 
// Exemplo de uso:
const x = [865.90, 844.89, 830.41, 823.59, 813.48, 775.76, 770.93, 767.42,
 758.19, 738.09, 735.18, 728.69, 715.77, 712.83, 696.23, 677.00, 674.78, 666.41,
664.52, 655.46, 648.00, 646.13, 641.17, 636.69, 635.08, 621.74, 568.52];
const y = [850.84, 823.11, 811.14, 801.34, 800.22, 768.79, 752.70, 743.47, 
 739.10, 723.06, 718.94, 725.90, 720.45, 693.84, 687.3, 663.41, 657.22, 672.50,
644.21, 629.14, 622.08, 622.00, 641.27, 631.28, 616.23, 596.23, 558.16];
 
const resultado = regressaoLinear(x, y);
console.log("Equação da reta:", resultado.equacao);
console.log("Coeficiente angular (a):", resultado.a);
console.log("Coeficiente linear (b):", resultado.b);
console.log("R²:", resultado.r2);