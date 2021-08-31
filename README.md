# Curso práctico de JavaScript

Estas son mis notas sobre el curso práctico de JavaScript.

## Análisis: ¿Cómo calcular figuras geométricas?
Las principales figuras geometricas que conocemos son: Cuadrado, rectangulo, triángulo, y círculo

**Perímetro** 
Es el borde de la figura.
Para saber el perimetro de una figura se debe sumar la longitus de 
todos los bordes. por ejemplo:

* Para saber el perimetro de un cuadrado se debe sumar sus cuatro lados, como se sabe que el cuadrado tiene cuatro lados iguales basta con conocer un lado y multiplicarlo por 4.
* Para el triangulo debemos sumar los tres lados.
* para el circulo o circunferencia necesitamos el radio, el diametro. Para saber el perimetro debemos calcular el diametro por *pi* (3.14).

**Area**
Esta en dos dimensiones, representa la extensión de una region en dos dimensiones.

* para calcular el area en un cuadrado se debe multiplicar la base por la altura.
* para calcular el area en un triangulo debemos calcular la base por altura y dividir el resultado por 2.
* para el area del circulo se usa radio al cuadrado por *pi*.

### Primer Taller: Calculadora de figuras geometricas.
1. Definir las fórmulas.
2. Implementar las fórmulas en JavaScript.
3. Crear funciones.
4. Integrar JavaScript en HTML.

## Análisis: cómo calcular porcentajes y descuentos.
Formula para calcular el porcentaje
[P * (100 - D)]/100 siendo P el precio del producto, y D el descuento.
### Segundo Taller: Porcentajes y descuentos.
1. definir las fórmulas.
2. implementar las fórmulas en JavaScript.
3. Crear funciones.
4. Integrar JS con HTML.

## Promedio, moda y mediana
**Media o promedio aritmético**: Consiste en sumar cada numero y dividirlo por la cantidad de numero que hay.

(20 + 30 + 40) = 90 / 3 = 30
Este no es tan optimo ya que si ingresa algo a lo que se le llama “dato atípico” los resultados no serian muy acertados.


**Mediana**: Este consiste en tener un numero de elementos numéricos, lo primero que debes de hacer es ordenarlos en forma ascendente:

Si el numero de datos que hay en el “arreglo” es impar escogemos el numero de la mitad: Si fueran 15 posiciones escogemos la posición 8
Si el numero de datos que hay en el “arreglo” es par escogemos el valor de las dos posiciones del centro y las dividimos en dos: Si fuera 16 escogemos la posición 8 y 9 y la dividimos entre 2
Este proceso es mucho mas optimo que la media ya que los datos atípicos no afectaran demasiado el valor final.

**Moda**: Este es el dato que mas se repite en un conjunto de datos si tenemos el siguiente arreglo [10,9,8,10,8,10,8,7,9] y vemos que dos números se repiten la misma cantidad de veces, simplemente se ponen los dos [8,10].
Este tipo de proceso es muy funcional cuando no solo queremos hablar de tipos de datos numéricos, tambien pueden ser cadenas de texto y demás.

## Tercer Taller: Promedio, moda y mediana.
1. definir las formulas.
2. implementar las fórmulas en JS.
3. crear funciones.
4. integrar JS con HTML.

para tener en cuenta 
![](https://static.platzi.com/media/user_upload/FR%20ARRAY-SHEET-55236528-302e-4e62-8c1d-40741ffc6a79.jpg)

## Análisis: cómo analizar salarios

Estructura
- lista de paises
- persona individual (objetos[nombres, salarios])

Análisis:
* total
* promedio
* mediana
* general
* Top 10%