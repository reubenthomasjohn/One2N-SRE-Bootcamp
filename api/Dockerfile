FROM node:18

WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files
COPY . .

RUN npx prisma generate

# Expose the desired port
EXPOSE 3000

# Start your application
CMD ["npm", "run", "start:migrate:prod"]