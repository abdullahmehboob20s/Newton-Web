const Points = ({ title, points }: { title: string; points: string[] }) => {
  return (
    <div className="max-w-[260px] w-full mx-auto">
      <p className="text-2xl font-staatliches text-white mb-3">{title}</p>

      <div className="space-y-3">
        {points.map((point, index) => (
          <p key={index} className="text-xl text-secondary-1000">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
};

function Charts() {
  return (
    <div className="py-100px bg-black">
      <div className="container mb-150px">
        <Points
          title="6% buy/sell tax:"
          points={["2% Liquidity", "3% USDC reflections", "1% Marketing"]}
        />

        <div className="mb-100px"></div>

        <Points
          title="locking periods:"
          points={[
            "8% Team Allocation is locked for 2 years.",
            "3% Advisors allocation is locked for 2 years.",
            "5% Marketing wallet linear vesting.",
          ]}
        />
      </div>

      <div className="container">
        <h2 className="font-staatliches text-center text-3xl text-white mb-16">
          Public rounds
        </h2>

        <table className="bg-[#494949] rounded-xl overflow-hidden rounds-table w-full border-collapse">
          <thead>
            <tr>
              <th></th>
              <th>SEED</th>
              <th>Private sale</th>
              <th>Whitelisted presale</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-side>funds raised in dollars</td>
              <td>$45,500</td>
              <td>$100,000</td>
              <td>$135,000</td>
              <td>$280,500</td>
            </tr>
            <tr>
              <td data-side>tokens allocated </td>
              <td>$45,500</td>
              <td>$100,000</td>
              <td>$135,000</td>
              <td>$280,500</td>
            </tr>
            <tr>
              <td data-side>tokens price per dollar </td>
              <td>$45,500</td>
              <td>$100,000</td>
              <td>$135,000</td>
              <td>$280,500</td>
            </tr>

            <tr>
              <td data-side>percentage of supply</td>
              <td>$45,500</td>
              <td>$100,000</td>
              <td>$135,000</td>
              <td>$280,500</td>
            </tr>
            <tr>
              <td data-side>% of liquidity</td>
              <td>$45,500</td>
              <td>$100,000</td>
              <td>$135,000</td>
              <td>$280,500</td>
            </tr>
            <tr>
              <td data-side>profit at launch</td>
              <td>$45,500</td>
              <td>$100,000</td>
              <td>$135,000</td>
              <td>$280,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charts;
