FROM node:12

ENV PORT 3060

ARG NEXT_PUBLIC_SITE_URL

# Create app directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json .
RUN yarn

# Create .env.production on /usr/src/app/
RUN echo "NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}" > .env.partner.production

# Copying source files
COPY . .

# Building app
RUN npm run build
EXPOSE 3060

# Running the app
CMD "npm" "run" "start"
