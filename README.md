
RUN npm i nodemon@1.18.5 -g COMMAND AFTER DOWNLOADING

TO RUN app.js every save the command is not 'node app.js', it is 'nodemon app.js' cause of nodemon.
TO RUN express with hbs extention saves, command is nodemon app.js -e js,hbs
TO CLOSE NODEMON => ctrl + c
TO DEBUG PROGRAM => node inspect OR node --inspect-brk 