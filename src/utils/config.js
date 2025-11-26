// export const SlugIds = {
//   telecom: "80420",
//   banking: "80446",
//   government: "80482",
//   dmv: "80509",
//   healthcare: "80527",
//   "hospitals-and-clinics": "80530",
//   pharmacy: "80561",
//   "emergency-room": "80576",
//   laboratories: "80594",
//   retail: "80609",
//   supermarkets: "80625",
//   "retail-electronic": "80641",
//   "airports-and-airlines": "80659",
//   education: "80678",
//   "stock-exchange": "80694",
//   // Products
//   arham: "81001",
//   bilal: "81112",
// };
// export const SlugIds = {
//   "telecom": "80420",
//   "banking": "80446",
//   "government": "80482",
//   "dmv":"80509",
//   "healthcare": {
//     id: "80527",
//     children: {
//       "hospitals-and-clinics": "80530",
//       "pharmacy": "80561",
//       "laboratories": "80594",
//       "emergency-room": "80576",
//     },
//   },
//   "retail": {
//     id: "80609",
//     children: {
//       supermarkets: "80625",
//       "retail-electronic": "80641",
//     },
//   },
//   "airports-and-airlines": "80659",
//   "education": "80678",
//   "stock-exchange": "80694",
//   // Products
//   "solutions":{
//     id:"81112",
//     children:{
//       "queue-management-system":"81286",
//       "smart-online-appointment-booking-and-scheduling-software":"81374",
//       "whatsapp-appointment-management":"81419",
//       "virtual-queuing":"81446",



//     }
//   }

// };

export const SlugIds = {
  industries: {
    id:"80339",
    telecom: "80420",
    banking: "80446",
    government: "80482",
    dmv: "80509",
    healthcare: {
      id: "80527",
      children: {
        "hospitals-and-clinics": "80530",
        pharmacy: "80561",
        laboratories: "80594",
        "emergency-room": "80576",
      },
    },
    retail: {
      id: "80609",
      children: {
        supermarkets: "80625",
        "retail-electronic": "80641",
      },
    },
    "airports-and-airlines": "80659",
    education: "80678",
    "stock-exchange": "80694",
  },

  solutions: {
    id: "81112",
    "smart-online-appointment-booking-and-scheduling-software": "81374",
     "whatsapp-appointment-management": "81419",
     "take-a-number":"81577",
     "information-video-wall":"81837",
     "service-area-design":"82492",
     "spectra-queue-analytics-software":"82717",
     "self-service-kiosks-software":"82760",
     "ncr-corporation":"83202",
     "queue-management-system":{
       id:"81286",
       children:{
         "virtual-queuing":"81446",
         "whatsapp-virtual-queuing-solution":"81489",
         "mobile-queuing":"81534",
         "linear-queuing":"81620",
       }
     },
     "digital-signage":{
      id:"81672",
      children:{
        "media-player":"81715",
        "vertica":"81758",
        "video-wall":"81793",
        "software":"82803",
        
      }
     },
      "led-displays":{
      id:"81880",
      children:{
        "indoor":"81925",
        "outdoor":"81982",
        
      }
     },
     "customer-feedback":{
      id:"82179",
      children:{
        "devices":"82442",
      }
     },
     "self-service-kiosks":{
      id:"82538",
      children:{
        "cquick-cash-deposit-machine":"82581",
        "card-issuance-collection-solution":"82612",
        "cash-to-card":"82655",
        "telecom":"82686",
      },
     }
     
  },

};



export const templateBackground = {
  industries: "/assets/bg3.png",
  solutions: "/assets/background.png",
};
