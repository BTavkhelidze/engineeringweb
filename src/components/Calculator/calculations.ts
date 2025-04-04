export const calculateProbAlpaWC = (toilet: number): number => {
  if (toilet >= 1 && toilet <= 4) return 1;
  if (toilet >= 5 && toilet <= 9) return 0.78;
  if (toilet >= 10 && toilet <= 14) return 0.63;
  if (toilet >= 15 && toilet <= 19) return 0.53;
  if (toilet >= 20 && toilet <= 24) return 0.49;
  if (toilet >= 25 && toilet <= 29) return 0.46;
  if (toilet >= 30 && toilet <= 34) return 0.44;
  if (toilet >= 35 && toilet <= 39) return 0.42;
  if (toilet >= 40 && toilet <= 49) return 0.41;
  if (toilet >= 50) return 0.38;
  return 0;
};

export const calculateProbAplaKitchen = (kitchen: number): number => {
  if (kitchen >= 1 && kitchen <= 4) return 1;
  if (kitchen >= 5 && kitchen <= 9) return 0.78;
  if (kitchen >= 10 && kitchen <= 14) return 0.63;
  if (kitchen >= 15 && kitchen <= 19) return 0.53;
  if (kitchen >= 20 && kitchen <= 24) return 0.49;
  if (kitchen >= 25 && kitchen <= 29) return 0.46;
  if (kitchen >= 30 && kitchen <= 34) return 0.44;
  if (kitchen >= 35 && kitchen <= 39) return 0.42;
  if (kitchen >= 40 && kitchen <= 49) return 0.41;
  if (kitchen >= 50) return 0.38;
  return 0;
};

export const calculateVentilation = (
  kitchen: number,
  toilet: number,
  shaxta: number,
  kitchenEType: string,
  damper: string,
  shaftVentT: string
) => {
  const probAlpaWC = calculateProbAlpaWC(toilet);
  const probAplaKitchen = calculateProbAplaKitchen(kitchen);

  console.log(kitchenEType, 'samzare');
  const QKittchen = kitchenEType.includes('kedeli')
    ? 180 * kitchen * probAplaKitchen
    : 400 * kitchen * probAplaKitchen;

  const QWC = 80 * toilet * probAlpaWC;

  if (shaxta <= 100) {
    return {
      samzareulosShaxtisSigane: 'Shaxta must be greater than 100',
      WCShaxtisSigane: 'Shaxta must be greater than 100',
    };
  }

  const kitchenNumDamper = damper.startsWith('yes') ? 100 : 300;
  const WCNumDamper = damper.startsWith('yes') ? 100 : 250;
  console.log(QKittchen);

  const airVelocity = shaftVentT.startsWith('natural') ? 2 : 6;

  const haersatarisSIganeKitchen =
    (1000 * QKittchen) / (airVelocity * 3.6 * (shaxta - 100));

  const haersatarisSIganeWC =
    (1000 * QWC) / (airVelocity * 3.6 * (shaxta - 100));

  console.log(shaxta);
  console.log(haersatarisSIganeKitchen, 'haersatarti');
  console.log(haersatarisSIganeWC, 'haersatarti');
  return {
    samzareulosShaxtisSigane:
      haersatarisSIganeKitchen > (shaxta - 100) * 4
        ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
        : kitchenNumDamper + haersatarisSIganeKitchen,
    WCShaxtisSigane:
      haersatarisSIganeWC > (shaxta - 100) * 4
        ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
        : WCNumDamper + haersatarisSIganeWC,
  };
};
