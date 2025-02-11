import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";

interface RewardActivity {
  id: string;
  points: number;
  type: "earned" | "redeemed";
  description: string;
  date: string;
}

interface RewardPointsData {
  points: number;
  history: RewardActivity[];
}

interface DemoRewardPoints {
  [email: string]: RewardPointsData;
}

// Demo data - Replace with API call
const demoRewardPoints: DemoRewardPoints = {
  "1234": {
    points: 1250,
    history: [
      {
        id: "1",
        points: 100,
        type: "earned",
        description: "Purchase Order #1234",
        date: "2024-02-01",
      },
      {
        id: "2",
        points: 50,
        type: "earned",
        description: "First Review Posted",
        date: "2024-02-02",
      },
      {
        id: "3",
        points: -200,
        type: "redeemed",
        description: "Discount on Order #1235",
        date: "2024-02-03",
      },
      {
        id: "4",
        points: 300,
        type: "earned",
        description: "Purchase Order #1236",
        date: "2024-02-04",
      },
    ],
  },
};

export function useRewardPoints() {
  const { user } = useAuth();
  const [rewardData, setRewardData] = useState<RewardPointsData>({
    points: 0,
    history: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.phone) {
      // Simulate API call
      setTimeout(() => {
        setRewardData(demoRewardPoints[user.phone] || demoRewardPoints["1234"]);
        setIsLoading(false);
      }, 500);
    }
  }, [user]);

  const getPointsNeededForNextTier = () => {
    const points = rewardData.points;
    if (points < 1000) return 1000 - points;
    if (points < 2500) return 2500 - points;
    if (points < 5000) return 5000 - points;
    return 0;
  };

  const getTier = () => {
    const points = rewardData.points;
    if (points >= 5000) return "Platinum";
    if (points >= 2500) return "Gold";
    if (points >= 1000) return "Silver";
    return "Bronze";
  };

  const getTierProgress = () => {
    const points = rewardData.points;
    if (points >= 5000) return 100;
    if (points >= 2500) return (points - 2500) / 25;
    if (points >= 1000) return (points - 1000) / 15;
    return points / 10;
  };

  return {
    isLoading,
    points: rewardData.points,
    history: rewardData.history,
    tier: getTier(),
    tierProgress: getTierProgress(),
    pointsNeededForNextTier: getPointsNeededForNextTier(),
  };
}
