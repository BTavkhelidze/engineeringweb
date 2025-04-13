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
  shaftVentT: string,
  splitHaersatari?: boolean,
  splitHaersatariWC?: boolean
) => {
  const probAlpaWC = calculateProbAlpaWC(toilet);
  const probAplaKitchen = calculateProbAplaKitchen(kitchen);

  const dct1 = kitchen % 2 === 0 ? kitchen / 2 : kitchen / 2 + 0.5;
  const dct2 = kitchen % 2 === 0 ? kitchen / 2 : kitchen / 2 - 0.5;

  const dct1WC = toilet % 2 === 0 ? toilet / 2 : toilet / 2 + 0.5;
  const dct2WC = toilet % 2 === 0 ? toilet / 2 : toilet / 2 - 0.5;

  const probAplaKitchendct1 = calculateProbAplaKitchen(dct1);
  const probAplaKitchendct2 = calculateProbAplaKitchen(dct2);

  const probAplaKitchendct1WC = calculateProbAplaKitchen(dct1WC);
  const probAplaKitchendct2WC = calculateProbAplaKitchen(dct2WC);

  const QKittchen = kitchenEType.includes('kedeli')
    ? 180 * kitchen * probAplaKitchen
    : 400 * kitchen * probAplaKitchen;

  const QKittchen1Dct = kitchenEType.includes('kedeli')
    ? 180 * dct1 * probAplaKitchendct1
    : 400 * dct1 * probAplaKitchendct1;

  const QKittchen2Dct = kitchenEType.includes('kedeli')
    ? 180 * dct2 * probAplaKitchendct2
    : 400 * dct2 * probAplaKitchendct2;

  const QWC = 80 * toilet * probAlpaWC;
  const QWC1Dct = 80 * dct1WC * probAplaKitchendct1WC;
  const QWC2Dct = 80 * dct2WC * probAplaKitchendct2WC;
  console.log(QWC1Dct, 'split');
  console.log(QWC2Dct, 'split');

  if (shaxta <= 100) {
    return {
      samzareulosShaxtisSigane: 'Shaxta must be greater than 100',
      WCShaxtisSigane: 'Shaxta must be greater than 100',
    };
  }

  // const kitchenNumDamper = damper.startsWith('yes') ? 100 : 300;
  // const WCNumDamper = damper.startsWith('yes') ? 100 : 250;

  const airVelocity = shaftVentT.startsWith('natural') ? 2 : 6;

  const haersatarisSIganeKitchenDct1 =
    (1000 * QKittchen1Dct) / (airVelocity * 3.6 * (shaxta - 100));
  const haersatarisSIganeKitchenDct2 =
    (1000 * QKittchen2Dct) / (airVelocity * 3.6 * (shaxta - 100));

  const haersatarisSIganeKitchen =
    (1000 * QKittchen) / (airVelocity * 3.6 * (shaxta - 100));

  const haersatarisSIganeWC =
    (1000 * QWC) / (airVelocity * 3.6 * (shaxta - 100));
  const haersatarisSIganeWC1Dct =
    (1000 * QWC1Dct) / (airVelocity * 3.6 * (shaxta - 100));
  const haersatarisSIganeWC2Dct =
    (1000 * QWC2Dct) / (airVelocity * 3.6 * (shaxta - 100));

  if (splitHaersatari) {
    return {
      samzareulosShaxtisSigane: [
        haersatarisSIganeKitchenDct1 > (shaxta - 100) * 4
          ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
          : haersatarisSIganeKitchenDct1,
        haersatarisSIganeKitchenDct2 > (shaxta - 100) * 4
          ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
          : haersatarisSIganeKitchenDct2,
      ],
      WCShaxtisSigane:
        haersatarisSIganeWC > (shaxta - 100) * 4
          ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
          : haersatarisSIganeWC,
    };
  }
  if (splitHaersatariWC) {
    return {
      samzareulosShaxtisSigane:
        haersatarisSIganeKitchen > (shaxta - 100) * 4
          ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
          : haersatarisSIganeKitchen,
      WCShaxtisSigane: [
        haersatarisSIganeWC1Dct > (shaxta - 100) * 4
          ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
          : haersatarisSIganeWC1Dct,
        haersatarisSIganeWC2Dct > (shaxta - 100) * 4
          ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
          : haersatarisSIganeWC2Dct,
      ],
    };
  }

  return {
    samzareulosShaxtisSigane:
      haersatarisSIganeKitchen > (shaxta - 100) * 4
        ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
        : haersatarisSIganeKitchen,
    WCShaxtisSigane:
      haersatarisSIganeWC > (shaxta - 100) * 4
        ? 'მოცემული პარამეტრებით სტანდარტული შახტის ჩასმა შეუძლებელია და მერე ორი ვარიანტი აქვს გავზარდოთ შახტის სიგანე ან ჩავსვათ ორი ჰაერსატარი'
        : haersatarisSIganeWC,
  };
};
