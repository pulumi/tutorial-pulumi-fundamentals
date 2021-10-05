FROM mongo:focal

ENV MONGO_INITDB_DATABASE=cart

COPY data.js /docker-entrypoint-initdb.d/mongo-init.js

HEALTHCHECK --interval=5m --timeout=3s \
  CMD echo 'db.runCommand("ping").ok' | mongo mongo:27017/test --quiet

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 27017
CMD ["mongod"]