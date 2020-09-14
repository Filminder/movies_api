FROM node:10
WORKDIR /usr/src/movies_api
COPY ./ ./
RUN npm install
EXPOSE 3000
CMD ["/bin/bash"]