const IterationSample = () => {
  let numbers = [1, 2, 3, 4, 5];

  let processed = numbers.map((num) => {
    return num * num;
  });

  console.log(processed);

  return (
    <ul>
      <li>눈사람</li>
      <li>얼음</li>
      <li>눈</li>
      <li>바람</li>
    </ul>
  );
};

export default IterationSample;
