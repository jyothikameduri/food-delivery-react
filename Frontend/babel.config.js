//parcel defaultly has a babel , but when we use a jest we use the below babel .
//when we use the below babel , then there will be conflict in default babel and the jest used babel
//so to avoid conflicts we configure in the .parcelsrc file -> i.e., to disable default babel transpilation

module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react',{runtime:'automatic'}],
  
  ],
};