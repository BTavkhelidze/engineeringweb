const calculateProbability = (count: number): number => {
  if (count >= 1 && count <= 4) return 1;
  if (count <= 9) return 0.78;
  if (count <= 14) return 0.63;
  if (count <= 19) return 0.53;
  if (count <= 24) return 0.49;
  if (count <= 29) return 0.46;
  if (count <= 34) return 0.44;
  if (count <= 39) return 0.42;
  if (count <= 49) return 0.41;
  if (count >= 50) return 0.38;
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
  const probAlpaWC = calculateProbability(toilet);
  const probAplaKitchen = calculateProbability(kitchen);

  const dct1 = kitchen % 2 === 0 ? kitchen / 2 : kitchen / 2 + 0.5;
  const dct2 = kitchen % 2 === 0 ? kitchen / 2 : kitchen / 2 - 0.5;

  const dct1WC = toilet % 2 === 0 ? toilet / 2 : toilet / 2 + 0.5;
  const dct2WC = toilet % 2 === 0 ? toilet / 2 : toilet / 2 - 0.5;

  const probAplaKitchendct1 = calculateProbability(dct1);
  const probAplaKitchendct2 = calculateProbability(dct2);

  const probAplaKitchendct1WC = calculateProbability(dct1WC);
  const probAplaKitchendct2WC = calculateProbability(dct2WC);

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
