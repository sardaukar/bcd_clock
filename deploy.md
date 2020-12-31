# Deployment with CapRover

Create new app on CapRover, then:

- `npm run build`
- `tar -cvf ./deploy.tar --exclude='*.map' ./captain-definition ./build/*`
- `caprover deploy -t ./deploy.tar` (select new app)
