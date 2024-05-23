CRUD de Contatos usando AWS e Supabase

# BACK
- Node version manager
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
- Inicializar
> . ~/.nvm/nvm.sh
- Instalar
> nvm install --lts
- GIT
> sudo yum install git -y

# Dependências (BACK-END):
> npm init

> npm install node --save

> npm install express --save

> npm install dotenv --save

> npm install @supabase/supabase-js --save

> npm install morgan --save

> npm install body-parser --save

> npm install cors --save


# AWS FRONT
- Instale o servidor web Apache: 
> sudo yum install -y httpd
- Start do Apache
> sudo systemctl start httpd
- Diretorio
> sudo su

> cd /var/www/html

aws s3 cp s3://meusiteads/siteExemploADS/ . --recursive