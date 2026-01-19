--> npm init -y
--> npm install express mongoose typescript cors dotenv 
--> tsc -init 
--> package json file ( "build": "tsc",)
**********----------- eslint prettier setu ----************
website link [https://blog.logrocket.com/linting-typescript-eslint-prettier/]
add in ts confige ["include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip]
            --> npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
            --> checking command [npx eslint src .]
            --> fix command [npx eslint src --fix]
            
****************string*******
--> mongoose e boro hater and interfase a suo hater string bebohar korbo
--> for mongoose structure 
     --> interface
      --> schema
       --> Model
        --> query
        

*************************--------------- route --> xontroller ke call dibe then controller service ke call dibe ************* then sevice database theke client ke dibe 
        

 ************** for validator using [validor() orzod or joi (npm i zod)]   

 ***********static and instance method *******    

 **********************************MIDDLEWARE PART(PRE and POST)*************************************
 --> middleware implement hobe model a  

****************************BYCRYPT LIbrary for password hashing**********************
--> bcrypt using hashing password

*********************Most Important Part is Error handling************
---> zod custom error handlinng
---> global error handling
--> searching and filtering 
