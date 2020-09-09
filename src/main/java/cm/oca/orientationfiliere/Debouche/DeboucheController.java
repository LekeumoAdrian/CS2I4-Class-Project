package cm.oca.orientationfiliere.Debouche;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/")


public class DeboucheController {

    private final DeboucheRepository deboucheRepository;

    public DeboucheController(DeboucheRepository deboucheRepository){
        this.deboucheRepository = deboucheRepository;
    }
    @GetMapping("/istDebouche")
    public List<Debouche> findAll(){
        return deboucheRepository.findAll();
    }

    @GetMapping("/uneDebouche/{idDebouche}")
    public  ResponseEntity<Object> findByID(@PathVariable Long idDebouche){
        Optional<Debouche> debouche1 = deboucheRepository.findById(idDebouche);

        if (debouche1.isPresent()){
            return ResponseEntity.ok(debouche1.get());
        } else {
            return ResponseEntity.badRequest().body("Debouché introuvable");
        }
    }

    @PostMapping("/addDebouche")
    public ResponseEntity<Object> save(@RequestBody Debouche debouche){
        deboucheRepository.save(debouche);
        return ResponseEntity.ok("");
    }
}
