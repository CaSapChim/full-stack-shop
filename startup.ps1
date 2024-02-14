# Run build in server directory
cd server
npm run build

echo "Build completed server!"

# Run build in client directory
cd ../client
npm run build

# Optionally, return to the original directory
cd ..
echo "Build completed successfully!"