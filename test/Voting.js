var Voting = artifacts.require("Voting");

contract("Voting", accounts => {
  it("should increment totalVotesFor when voteForCandidate is called", () => {
    var instance;
    var initialVotes;
    var updatedVotes;

    return Voting.deployed()
      .then(ins => (instance = ins))
      .then(_ => instance.totalVotesFor.call("Rama"))
      .then(totalVotes => (initialVotes = totalVotes))
      .then(_ => instance.voteForCandidate("Rama", {
        from: accounts[0]
      }))
      .then(_ => instance.totalVotesFor.call("Rama"))
      .then(totalVotes => (updatedVotes = totalVotes))
      .then(_ => {
        assert.equal(initialVotes, 0);
        assert.equal(updatedVotes, 1);
      });
  });
});