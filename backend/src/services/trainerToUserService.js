import TrainerToUser from "../models/TrainerToUser.js";

const createNewTrainerToUser = async (userDetailId, trainerId) => {
  const newData = new TrainerToUser({
    userDetailId: userDetailId,
    trainerId: trainerId,
  });
  await newData.save();
};

export { createNewTrainerToUser };
