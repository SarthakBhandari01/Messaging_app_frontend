export default function combineContext(...providers) {
  // This combines multiple context provider together and returns a single context provider

  return ({ children }) => {
    return providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children);
  };
}
