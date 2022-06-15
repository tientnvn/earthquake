# Prerequisite
- Docker 
- Docker compose

# Run
## Copy .env
cp .env.sample .env

docker-compose up -d --build

# Run DB migration
docker-compose ps | grep earthquake-earthquake | awk '{print $1}' | xargs -I xx docker exec xx db-migrate --env=mysql up

# If you want to clean the Data run this command
docker-compose ps | grep earthquake-earthquake | awk '{print $1}' | xargs -I xx docker exec xx db-migrate --env=mysql down

# Then, run 
docker-compose ps | grep earthquake-earthquake | awk '{print $1}' | xargs -I xx docker exec xx db-migrate --env=mysql up