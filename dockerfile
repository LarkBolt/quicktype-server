FROM node:16 AS Builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

FROM node:16-alpine
WORKDIR /usr/src/app
COPY --from=Builder /usr/src/app/dist /usr/src/app/dist
EXPOSE 3000
CMD [ "node", "dist/index.js" ]