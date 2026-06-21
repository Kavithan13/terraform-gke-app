FROM node:18

WORKDIR /app

# ✅ Copy files
COPY package*.json ./
RUN npm install

COPY . .

# ✅ Create non-root user
RUN useradd -m appuser

# ✅ Switch to non-root user
USER appuser

CMD ["node", "app.js"]
