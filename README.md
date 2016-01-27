# fontscaler
Enlarge font-size in container depending on the length of the text inside

Using this simple plugin you can enlarge font-size in container with depending on the length of the text inside this container. It's very simple jQuery plugin, so you can change it as you need.

# How to use?

Just initialize plugin and try!
```
$('.example').fontscaler();
```

If you want to enlarge font-size with animation, just initialize plugin with this settings:
```
$('.example').fontscaler({animate: { enable: true, duration: 500 }});
```

where "duration" it is an animation duration time (not necessary parameter).