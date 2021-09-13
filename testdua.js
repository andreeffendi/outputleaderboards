function climbingLeaderboard(scores, alice) {
    // get the unique ranks sorted descending
    scores = scores.reduce((ranking, score) => {
        if (score !== ranking[ranking.length - 1]) {
            ranking.push(score);
        }
        return ranking;
    }, [scores[0]]);

    const player_ranks = [];
    for (const score of alice) {
        while (scores && score >= scores[scores.length - 1])
            scores.pop()
        player_ranks.push(scores.length + 1)
    }

    return player_ranks
}