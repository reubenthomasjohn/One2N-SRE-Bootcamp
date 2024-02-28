FROM node:18

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files
COPY . .

RUN npx prisma generate

# Expose the desired port
EXPOSE 3000

# Start your application
CMD ["npm", "run", "start:migrate:prod"]