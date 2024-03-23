function calculateWateringSchedule() {
    var farmArea = document.getElementById("farmArea").value;
    var crop = document.getElementById("crop").value;
    var season = document.getElementById("season").value;

    // Calculate watering schedule based on farm area, crop, and season
    var wateringSchedule = "";
    if (farmArea === "small") {
        if (crop === "tomato") {
            if (season === "spring") {
                wateringSchedule = "Water every 2 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every day";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 3 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 5 days";
            }
        } else if (crop === "potato") {
            if (season === "spring") {
                wateringSchedule = "Water every 3 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 2 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 4 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 6 days";
            }
        } else if (crop === "wheat") {
            if (season === "spring") {
                wateringSchedule = "Water every 4 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 3 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 5 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 7 days";
            }
        }
    } else if (farmArea === "medium") {
        if (crop === "tomato") {
            if (season === "spring") {
                wateringSchedule = "Water every 1-2 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every day";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 2-3 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 4-5 days";
            }
        } else if (crop === "potato") {
            if (season === "spring") {
                wateringSchedule = "Water every 3-4 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 2-3 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 4-5 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 5-6 days";
            }
        } else if (crop === "wheat") {
            if (season === "spring") {
                wateringSchedule = "Water every 5-6 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 4-5 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 6-7 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 7-8 days";
            }
        } else if (crop === "corn") {
            if (season === "spring") {
                wateringSchedule = "Water every 4-5 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 3-4 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 5-6 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 6-7 days";
            }
        } else if (crop === "cucumber") {
            if (season === "spring") {
                wateringSchedule = "Water every 2-3 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every day";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 3-4 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 4-5 days";
            }
        }
    } else if (farmArea === "large") {
        if (crop === "tomato") {
            if (season === "spring") {
                wateringSchedule = "Water every 1 day";
            } else if (season === "summer") {
                wateringSchedule = "Water twice a day";
            } else if (season === "autumn") {
                wateringSchedule = "Water every day";
            } else if (season === "winter") {
                wateringSchedule = "Water every 3-4 days";
            }
        } else if (crop === "potato") {
            if (season === "spring") {
                wateringSchedule = "Water every 2-3 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 1-2 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 3-4 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 4-5 days";
            }
        } else if (crop === "wheat") {
            if (season === "spring") {
                wateringSchedule = "Water every 4-5 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 3-4 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 5-6 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 6-7 days";
            }
        } else if (crop === "corn") {
            if (season === "spring") {
                wateringSchedule = "Water every 3-4 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every 2-3 days";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 4-5 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 5-6 days";
            }
        } else if (crop === "cucumber") {
            if (season === "spring") {
                wateringSchedule = "Water every 1-2 days";
            } else if (season === "summer") {
                wateringSchedule = "Water every day";
            } else if (season === "autumn") {
                wateringSchedule = "Water every 2-3 days";
            } else if (season === "winter") {
                wateringSchedule = "Water every 3-4 days";
            }
        }

    }


    // Display watering reminders
    var wateringReminders = document.getElementById("wateringReminders");
    wateringReminders.innerHTML = "";
    var reminder = document.createElement("li");
    reminder.textContent = wateringSchedule;
    wateringReminders.appendChild(reminder);
}




function calculateFertilizationSchedule() {
    var farmArea = document.getElementById("farmArea").value;
    var crop = document.getElementById("crop").value;
    var season = document.getElementById("season").value;

    // Calculate fertilization schedule based on farm area, crop, and season
    var fertilizationSchedule = "";
    // Implement fertilization schedule calculation logic here
    // Calculate fertilization schedule based on farm area, crop, and season
    // var fertilizationSchedule = "";

    if (farmArea === "small") {
        if (crop === "tomato") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 3 weeks with a balanced fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every 2 weeks with a nitrogen-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 4 weeks with a phosphorus-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "potato") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 4 weeks with a nitrogen-rich fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every 3 weeks with a potassium-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 5 weeks with a phosphorus-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "wheat") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 5 weeks with a nitrogen-rich fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every 4 weeks with a phosphorus-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 6 weeks with a potassium-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "corn") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 4 weeks with a nitrogen-rich fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every 3 weeks with a phosphorus-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 5 weeks with a potassium-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "cucumber") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 2 weeks with a nitrogen-rich fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every week with a potassium-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 3 weeks with a phosphorus-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        }
    }
    else if (farmArea === "medium") {
        if (crop === "tomato") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 2 weeks with a balanced fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every week with a nitrogen-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 3 weeks with a phosphorus-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "potato") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 3 weeks with a potassium-rich fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every 2 weeks with a nitrogen-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 4 weeks with a phosphorus-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "wheat") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 4 weeks with a nitrogen-rich fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every 3 weeks with a phosphorus-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 5 weeks with a balanced fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "corn") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 3 weeks with a nitrogen-rich fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every 2 weeks with a phosphorus-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 4 weeks with a potassium-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        } else if (crop === "cucumber") {
            if (season === "spring") {
                fertilizationSchedule = "Fertilize every 2 weeks with a balanced fertilizer";
            } else if (season === "summer") {
                fertilizationSchedule = "Fertilize every week with a nitrogen-rich fertilizer";
            } else if (season === "autumn") {
                fertilizationSchedule = "Fertilize every 3 weeks with a phosphorus-rich fertilizer";
            } else if (season === "winter") {
                fertilizationSchedule = "No fertilization required during winter";
            }
        }
    }
    
    
        // Define fertilization schedule for medium farm area
        else if (farmArea === "large") {
            if (crop === "tomato") {
                if (season === "spring") {
                    fertilizationSchedule = "Fertilize every 2 weeks with a balanced fertilizer";
                } else if (season === "summer") {
                    fertilizationSchedule = "Fertilize every week with a nitrogen-rich fertilizer";
                } else if (season === "autumn") {
                    fertilizationSchedule = "Fertilize every 3 weeks with a phosphorus-rich fertilizer";
                } else if (season === "winter") {
                    fertilizationSchedule = "No fertilization required during winter";
                }
            } else if (crop === "potato") {
                if (season === "spring") {
                    fertilizationSchedule = "Fertilize every 3 weeks with a balanced fertilizer";
                } else if (season === "summer") {
                    fertilizationSchedule = "Fertilize every 2 weeks with a nitrogen-rich fertilizer";
                } else if (season === "autumn") {
                    fertilizationSchedule = "Fertilize every 4 weeks with a phosphorus-rich fertilizer";
                } else if (season === "winter") {
                    fertilizationSchedule = "No fertilization required during winter";
                }
            } else if (crop === "wheat") {
                if (season === "spring") {
                    fertilizationSchedule = "Fertilize every 4 weeks with a balanced fertilizer";
                } else if (season === "summer") {
                    fertilizationSchedule = "Fertilize every 3 weeks with a nitrogen-rich fertilizer";
                } else if (season === "autumn") {
                    fertilizationSchedule = "Fertilize every 5 weeks with a phosphorus-rich fertilizer";
                } else if (season === "winter") {
                    fertilizationSchedule = "No fertilization required during winter";
                }
            } else if (crop === "corn") {
                if (season === "spring") {
                    fertilizationSchedule = "Fertilize every 3 weeks with a balanced fertilizer";
                } else if (season === "summer") {
                    fertilizationSchedule = "Fertilize every 2 weeks with a nitrogen-rich fertilizer";
                } else if (season === "autumn") {
                    fertilizationSchedule = "Fertilize every 4 weeks with a phosphorus-rich fertilizer";
                } else if (season === "winter") {
                    fertilizationSchedule = "No fertilization required during winter";
                }
            } else if (crop === "cucumber") {
                if (season === "spring") {
                    fertilizationSchedule = "Fertilize every 2 weeks with a balanced fertilizer";
                } else if (season === "summer") {
                    fertilizationSchedule = "Fertilize every week with a nitrogen-rich fertilizer";
                } else if (season === "autumn") {
                    fertilizationSchedule = "Fertilize every 3 weeks with a phosphorus-rich fertilizer";
                } else if (season === "winter") {
                    fertilizationSchedule = "No fertilization required during winter";
                }
            }
        }
        
    // Display fertilization reminders
    var fertilizationReminders = document.getElementById("fertilizationReminders");
    fertilizationReminders.innerHTML = "";
    var reminder = document.createElement("li");
    reminder.textContent = fertilizationSchedule;
    fertilizationReminders.appendChild(reminder);
}
